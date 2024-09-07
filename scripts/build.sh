#!/bin/sh
set -eu


# 環境モード
TYPE=$1


# if [ $MODE != "production" ]; then
#   echo "開発環境用にビルドすることはできません"
#   exit 1
# fi


# ビルド可能なブランチか
# 確認
# if [ $current_branch != "main" ]; then
#   echo "ビルド可能なブランチではありません"
#   exit 1
# fi


echo "ビルドしていきます"


# ビルドが正常か確認
EMBED_TYPE=$TYPE vite build
if [[ $? -gt 0 ]]; then
 echo "ビルド失敗しています"
 exit 1
fi


echo "ビルド完了しました"