export const env = {
    acessSecret: process.env.ACCESS_TOKEN_SECRET ?? "",
    refreshSecret: process.env.REFRESH_TOKEN_SECRET ?? "",
    acessTtl: process.env.JWT_ACESS_EXPIRES_IN ?? 900000,
    
}