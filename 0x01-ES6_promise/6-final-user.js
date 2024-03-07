mport signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    try {
        const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

        const userStatus = {
            status: userResult.status,
            value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason
        };

        const photoStatus = {
            status: photoResult.status,
            value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason
        };

        return [userStatus, photoStatus];
    } catch (error) {
        console.error('Error occurred:', error);
        return [];
    }
}

export default handleProfileSignup;
