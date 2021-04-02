{ pkgs ? import ./nix/deps/nixpkgs {}
, daml ? import ./nix/deps/daml.nix { inherit pkgs; }
}:

rec {
  inherit pkgs daml;

  model = pkgs.stdenv.mkDerivation {
    name = "model";

    nativeBuildInputs = [ daml ];

    src = ./model;

    buildPhase = ''
      mkdir $out
      daml build --output $out/healthcare-claims-processing.dar
    '';
    installPhase = "true";
  };

  triggers = pkgs.stdenv.mkDerivation {
    name = "triggers";

    nativeBuildInputs = [ daml ];

    src = ./triggers;

    patches = [
      (pkgs.writeText "fix-dep.patch" ''
        --- a/daml.yaml
        +++ b/daml.yaml
        @@ -12,4 +12,4 @@ dependencies:
           - daml-stdlib
           - daml-trigger
           - daml-script
        -  - ../target/healthcare-claims-processing.dar
        +  - ${model}/healthcare-claims-processing.dar
      '')
    ];

    buildPhase = ''
      daml build --output $out/healthcare-claims-processing-triggers.dar
    '';
    installPhase = "true";
  };

  daml-js = pkgs.runCommand "daml-js" {
    nativeBuildInputs = [ daml ];
  } ''
    daml codegen js ${model}/*.dar -o $out
  '';

  nodejs = pkgs.nodejs-15_x;

  ui = import ./nix/ui {
    inherit pkgs nodejs daml-js;
  };

  # didn't seem to help
  uiPackage = pkgs.lib.overrideDerivation ui.package (_: {
    patches = [
      (pkgs.writeText "fix-dep.patch" ''
        --- a/package.json
        +++ b/package.json
        @@ -4,7 +4,7 @@
           "private": true,
           "dependencies": {
             "@craco/craco": "6.1.1",
        -    "@daml.js/healthcare-claims-processing": "file:daml.js/healthcare-claims-processing-2.0.0",
        +    "@daml.js/healthcare-claims-processing": "file:${daml-js}/healthcare-claims-processing-2.0.0",
             "@daml/ledger": "1.9.0",
             "@daml/react": "1.9.0",
      '')
    ];
  });

  shell = pkgs.mkShell {
    name = "daml-shell";
    nativeBuildInputs = [ daml pkgs.openjdk nodejs ];
  };
}
