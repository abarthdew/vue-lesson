# vue-lesson

## node 설치
```
$ sudo apt update
$ sudo apt install nodejs ## node download
$ nodejs -v ## read version
$ sudo apt install npm ## npm(node manager) download
```

## git 설치
```shell
$ sudo apt install git-all
```

## vue3 설치
```shell
$ sudo npm install vue
$ sudo npm install -g @vue/cli

$ root@jonah-15U530-LH10K:~# vue --version
@vue/cli 4.5.15

## vue create
$ root@jonah-15U530-LH10K:/home/jonah/Documents/vue-lesson# vue create vue-todo-cli3
```

## veu cli2, 3 차이
```shell
## cli2
$ npm i -g @vue/cli-init
$ sudo vue init webpack vue-todo
################
## cd vue-todo
## npm run dev
## cli3
$ root@jonah-15U530-LH10K:/home/jonah/Documents/vue-lesson# vue create vue-todo-cli3
################
## cd vue-todo-cli3
## npm run serve
```

## vue create 오류 시$ 
```shell
## 로컬 터미널 열어서 명령어 입력하고
$ jonah@jonah-15U530-LH10K:~$ sudo -i
$ root@jonah-15U530-LH10K:~# npm cache verify
$ root@jonah-15U530-LH10K:~# npm install -g create-react-app
```

## npm 디렉토리 권한 허용(모든 권한 허용)
```shell
$ jonah@jonah-15U530-LH10K:~$ sudo chown -R jonah:jonah /usr/local/lib/node_modules/
## 또는
$ jonah@jonah-15U530-LH10K:~$ sudo chown -R jonah *
```

## git branch 삭제 후 github에 남겨져 있는 branch 제거
```cmd
// remove branch
$ git branch -d [branch_name]
// remove github branch
$ git push -d origin [removed_branch_name]
```

## Reference
- https://www.notion.so/vue-lesson-bb01133a21e94a969b42f1a82f8c24c7
- https://velog.io/@ywoosang/Node.js-%EC%84%A4%EC%B9%98
- vscode git 권한설정 : https://hyeo-noo.tistory.com/184
