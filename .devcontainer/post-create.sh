#!/bin/bash
set -e # コマンドがエラーで終了したら直ちにスクリプトを終了する

echo "Updating package lists and installing base dependencies..."
sudo apt-get update && sudo apt-get install -y tree unzip zip curl

yarn install

echo "Post-create script finished successfully."
