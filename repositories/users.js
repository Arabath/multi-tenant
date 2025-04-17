const mainschemaName = "Users";

const addAUserRepo = async (
    dbconn,
    userData,
    session = null
) => {
    const sessionOption = {}
    if(session) sessionOption.session = session;
    const data = await dbconn
        .model(mainschemaName)
        .create([userData], sessionOption);
    return data[0];
};

const getAUserRepo = async (
    dbconn,
    findQuery = {},
    selectQuery = {}
) => {
    const data = await dbconn
        .model(mainschemaName)
        .findOne(findQuery)
        .select(selectQuery)
        .lean()
    return data;
};

const updateUserRepo = async (
    dbconn,
    findQuery,
    updateQuery
) => {
    const data = await dbconn
        .model(mainschemaName)
        .updateOne(findQuery, updateQuery);
    return data;
};

const getUsersRepo = async (
    dbconn,
    findQuery = {},
    selectQuery = {}
) => {
    const data = await dbconn
        .model(mainschemaName)
        .find(findQuery)
        .select(selectQuery)
        .lean()

    return data;
}

export {
    addAUserRepo,
    getAUserRepo,
    updateUserRepo,
    getUsersRepo
};