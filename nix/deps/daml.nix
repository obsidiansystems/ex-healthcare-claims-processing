{ pkgs ? import <nixpkgs> {} }:
pkgs.stdenv.mkDerivation rec {  
  name = "daml-sdk";
  version = "1.12.0";
  nativeBuildInputs = [ pkgs.stdenv ];
  src = pkgs.fetchurl {
    url = "https://github.com/digital-asset/daml/releases/download/v${version}/daml-sdk-${version}-linux.tar.gz";
    sha256 = "0n500pkkwpv4q9w6lb7h9m1vkxgilfxjqx57i679bhdgzahc14b8";
  };
  buildPhase = ''
    mkdir $out
    sed -i 's|/usr/bin/env sh|/bin/sh|' ./daml/daml
    HOME=$out/
    ./daml/daml install .
    mv $out/.daml/* $out/
  '';
}
