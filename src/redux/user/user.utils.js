export const userIdVerification = (userId, existingUserId)=>{
    if(existingUserId === null){
        return userId
    }
    return existingUserId
}