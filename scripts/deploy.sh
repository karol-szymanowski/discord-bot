echo ${PRIVATE} > /etc/key
sudo ssh-add /etc/key
ssh ${user}@${host}:${port}
cd discord-bot
git pull
npm i
rm /etc/key
exit
