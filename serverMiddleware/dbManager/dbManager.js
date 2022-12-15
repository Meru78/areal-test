const { Sequelize, DataTypes, Model } = require('sequelize')

const connect = async () => {
    const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        dialect: 'postgres',
        logging: false,
    })

    try {
        await sequelize.authenticate()
        console.log('Соединение с БД было успешно установлено')
        initModelWords(sequelize)
    } catch (e) {
        console.error('Невозможно выполнить подключение к БД: ', e)
    }
}

class Words extends Model { }

function initModelWords(sequelizeConnection){
    Words.init(
        {
            uuid: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            text: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: false,
            createdAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt: false,
            updatedAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        },
        {
            sequelize: sequelizeConnection,
            modelName: 'Words',
            tableName: "words"
        }
    )
}

module.exports = {connect, Words}
