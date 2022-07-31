CREATE TABLE customer
(  
    id int IDENTITY(1,1) PRIMARY KEY,
    name nvarchar(100) NOT NULL,  
    address nvarchar(100) NOT NULL,
    contactNumber varchar(15) NOT NULL,
    remark nvarchar(100),
    createDate date,
    modifyDate date
);

--insert into customer values('test','geg','0912345678','',GETDATE(),NULL)
--insert into customer values('justin','softstar','0912345678','',GETDATE(),NULL)

--select * from customer
--delete customer where id > 3 and id <11
--drop table customer

update customer set name='', address='' where id = 1

update customer set name='',address='',contactNumber='',remark='',modifyDate=GETDATE() where id='10'


CREATE TABLE gas
(  
    id int IDENTITY(1,1) PRIMARY KEY,
    customer_id int NOT NULL,
    date date NOT NULL,
    weight int NOT NULL,
    categoryId int NOT NULL,
    category varchar(15) NOT NULL,
    quantity int NOT NULL,
    type int NOT NULL, -- 1->sales, 2->return
    remark nvarchar(100),
    createDate date,
    modifyDate date
);

--insert into gas values('1',GETDATE(),15,'Oxygen',5,1,'',GETDATE(),NULL)

--select * from gas

--drop table gas
