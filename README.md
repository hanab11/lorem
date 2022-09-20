# lorem
练习+打卡用仓库；   
[前端MDN-万维网](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)   

## 遇到的问题及解决办法    


## gitMerge     
本地修改，模拟解决冲突111
Github修改，模拟解决冲突222
>多人合作心得：本地commit后，先pull，需要合并时讨论，最后push

## vscode+git push报错 port 443: Timed out     
>HOST、代理     

## vscode+git push报错 SSL_read,,errno 10053     
>其一git config http.sslVerify "false"     
>其二git config --global --unset http.proxy      
     
## vscode+git push报错 未能身份验证（密码出错）     
>git上的错误，vscode并不会完全显示，需要使用git bash查看     
>查阅许久得知GitHub本地登录改用token了(https://blog.csdn.net/weixin_41010198/article/details/119698015)     
>具体操作方法如下：     
>其一git config --system --unset credential.helper（清空凭据）     
>其二token（作为密码）     
>其三git push origin（在git bash中输入账号和token）     
>最后git config --global credential.helper store(永久存储，不再要求密码登录)     


##
##
##
