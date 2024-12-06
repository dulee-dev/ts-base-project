
read -p "set root dir (default: new-project): " dir
dir=${dir:-"new-project"}

git clone https://github.com/dulee-dev/ts-base-project.git $dir

cd $dir

npm i

rm -fr .git

git init

git add .

git commit -m 'init'