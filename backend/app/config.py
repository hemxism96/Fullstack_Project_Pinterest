db = {
    'user'     : 'root',
    'password' : 'root',
    'host'     : 'mysql_db',
    'port'     : '3306',
    'database' : 'tododb'
}

DB_URL = f"mysql+pymysql://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}" 

