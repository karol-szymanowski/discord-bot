set -e
ssh -i ~/.ssh/id_rsa -p ${port} ${user}@${host} pwd
yes
cd discord-bot
git pull
npm i
pm2 restart discord-bot
exit
