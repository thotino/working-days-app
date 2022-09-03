# WORKING DAYS APP
Inspired from [this tutorial](https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554)


```sh
sequelize model:generate --name Company --attributes name:STRING

sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyId:INTEGER

sequelize model:generate --name WorkingDay --attributes weekDay:STRING,workingDate:DATE,isWorking:BOOLEAN
```