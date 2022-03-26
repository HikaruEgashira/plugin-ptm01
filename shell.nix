{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.php
		pkgs.nodePackages.pnpm
		pkgs.nodejs
  ];
}
