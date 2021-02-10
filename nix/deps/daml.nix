{ pkgs ? import <nixpkgs> {} }:
pkgs.stdenv.mkDerivation rec {  
  name = "daml-sdk";
  version = "1.9.0";
  nativeBuildInputs = [ pkgs.stdenv ];
  src = pkgs.fetchurl {
    url = "https://github.com/digital-asset/daml/releases/download/v${version}/daml-sdk-${version}-linux.tar.gz";
    sha256 = "091va4mdjbnlvh12rz8q2yqgnkq21jxh6bqlkd9h27wzmjrxlycx";
  };
  buildPhase = ''
    mkdir $out
    sed -i 's|/usr/bin/env sh|/bin/sh|' ./daml/daml
    HOME=$out/
    ./daml/daml install .
    mv $out/.daml/* $out/
  '';
}
