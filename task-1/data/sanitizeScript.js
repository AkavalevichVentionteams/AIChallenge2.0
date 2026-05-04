(function() {
    // 1. Update all names
    document.querySelectorAll('*[class^="name_"]').forEach((n, i) => {
        n.innerText = `USER_${i + 1}`;
    });
    // 1.1. Update all podium names
    document.querySelectorAll('*[class^="podiumName_"]').forEach((n, i) => {
        n.innerText = `USER_${i + 1}`;
    });
    // 1.2. Update all profile names
    document.querySelectorAll('.name').forEach((n, i) => {
        n.innerText = `USER_${i + 1}`;
    });

    // 2. Update all roles
    document.querySelectorAll('*[class^="role_"]').forEach((r, i) => {
        r.innerText = `USER_ROLE_${i + 1}`;
    });
    // 2.1. Update all podium roles
    document.querySelectorAll('*[class^="podiumRole_"]').forEach((r, i) => {
        r.innerText = `USER_ROLE_${i + 1}`;
    });

    // 3. Update all avatars
    const avatarUrl = "https://avatars.githubusercontent.com/u/278784460?v=4&size=64";
    document.querySelectorAll('*[class^="avatar_"]').forEach((a) => {
        a.style.backgroundImage = `url("${avatarUrl}")`;
    });
    // 3.1. Update all podium avatars
    document.querySelectorAll('*[class^="podiumAvatar_"]').forEach((a) => {
        a.style.backgroundImage = `url("${avatarUrl}")`;
    });
    // 3.2. Update all profile avatars
    document.querySelectorAll('*[class^="profile-picture"]').forEach((a) => {
        a.style.backgroundImage = `url("${avatarUrl}")`;
    });

    // 4. Update all activities
    document.querySelectorAll('*[class^="activityName_"]').forEach((a, i) => {
        a.innerText = `SOME_AWESOME_ACTIVITY_HERE_${i + 1}`;
    });

    console.log("All elements updated independently.");
})();
