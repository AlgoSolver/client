#!/usr/bin/env bash
#run client on dev || production

run()
{
  read -p "Enter your choice [1-Running on development mode/2-build for production and launch server]: " choice
  case $choice in
    1)
      npm run start
      ;;
    2)
      npm run build
      npm run start
      ;;
    *)
      echo "Sorry, invalid input"
      method
      ;;
  esac
}
run