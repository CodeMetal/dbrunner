# DBRunner
A Web based Sql Admin Tool to perform basic operations like altering schema, running queries.
Supports SSL based connectivity to databases. (Currently Mysql)

## Configurations
application.yml file has database connection details (for Mysql). If you need to connect to any other RDBMS, change the JDBC parameters accordingly and update pom.xml to have the corresponding JDBC Driver Jar.

### To make this tool run with PostGres Sql
- Add the following driver to pom.xml
<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<version>9.4.1211</version>
</dependency>

- Use the 'application-postgres.yml' in src\main\resources by renaming to application.yml.


### Build and Run
Run 'mvn clean install' to build the application.
Run 'java -jar target/dbrunner-0.0.1-SNAPSHOT.jar' to start the application.


Go to http://localhost:8080/index.html and make dbrunner run queries!!.

