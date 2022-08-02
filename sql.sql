CREATE TABLE customer
(  
    id int IDENTITY(1,1) PRIMARY KEY,
    name nvarchar(100) NOT NULL,   
    region nvarchar(100) NOT NULL, 
    address nvarchar(100) NOT NULL,  
    contactNumber varchar(15) NOT NULL,
    remark nvarchar(100),
    createDate date,
    modifyDate date
);

--insert into customer values('merry','yangon','PadaMyarSt','0912345678','',GETDATE(),NULL)
--insert into customer values('justin','mandalay','YaeOoSt','0912345678','',GETDATE(),NULL)

--select * from customer
--delete customer where id > 3 and id <11
--drop table customer

--update customer set name='', address='' where id = 1
--
--update customer set name='',address='',contactNumber='',remark='',modifyDate=GETDATE() where id='10'


CREATE TABLE gas
(  
    id int IDENTITY(1,1) PRIMARY KEY,
    date date NOT NULL,
    customerId int NOT NULL,
    categoryId int NOT NULL,
    category varchar(50) NOT NULL,
    weight varchar(10) NOT NULL,
    quantity int NOT NULL,
    type int NOT NULL, -- 1->sales, 2->return
    remark nvarchar(100),
    createDate date,
    modifyDate date
);

--insert into gas values(GETDATE(),'1',1,'Oxygen(O2)',15,5,1,'',GETDATE(),NULL)
--insert into gas values(GETDATE(),'1',2,'Nitrogen(N2)',48,3,1,'',GETDATE(),NULL)

insert into ${table} values('${date}',${customerId},${categoryId},'${category}',${weight},${quantity},1,'${remark}',GETDATE(),NULL)

update gas set date=GETDATE() ,customerId='1',categoryId='1',category='j',weight=15,quantity=3,type=1,remark='' where id=10

update ${table} set date=${date},customerId=${customerId},categoryId=${categoryId},category=${category},weight=${weight},quantity=${quantity},type=1,remark=${remark} where id=${id}

update gas set type = 1 where id = 1021

--select * from gas

--drop table gas

--delete from gas where id > 5


select g.id as id, g.date, g.customerId, g.categoryId, g.category, g.weight, g.quantity, g.weight*g.quantity as totalWeight, g.remark from customer as c inner join gas as g on c.id = g.customerId where g.type = 1

select c.name as name, c.address as address, t.category as category, t.weight as weight, t.totalSalesQuantity, t.totalReturnQuantity, t.totalQuantityInUser, c.remark as remark from
        (select s.customerId, s.categoryId, s.category, s.weight, s.totalSalesQuantity, ISNULL(r.totalReturnQuantity, 0 ) as totalReturnQuantity, (s.totalSalesQuantity - ISNULL(r.totalReturnQuantity,0)) as totalQuantityInUser from 
            (select customerId, categoryId, category, weight, sum(quantity) as totalSalesQuantity from gas where type=1 and (date between '08/1/2022' and '08/11/2022') group by category, weight, categoryId, customerId) as s left join
            (select customerId, categoryId, category, weight, sum(quantity) as totalReturnQuantity from gas where type=2 and (date between '08/1/2022' and '08/11/2022') group by category, weight, categoryId, customerId) as r 
            on s.customerId = r.customerId and s.categoryId = r.categoryId and s.weight = r.weight) as t inner join customer as c on c.id = t.customerId ORDER BY c.name


