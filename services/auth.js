import { signJWT } from '../utils/misc.js';

const loginService = async (userData) => {
    if (!userData || !userData || !userData._id || !userData.tenantId)
        return {
            success: false,
            statusCode: 401,
            message: `No user with the given credentials`,
            responseObject: {
                incorrectField: "emal",
            },
        };

    const accessToken = signJWT(
        {
            userId: userData._id.toString(),
            tenantId: userData.tenantId.toString(),
        }
    );

    return {
        success: true,
        statusCode: 200,
        message: `Logged In Succesfully`,
        responseObject: {
            accessToken,
            userId: userData._id.toString(),
            tenantId: userData.tenantId.toString(),
        },
    };
};