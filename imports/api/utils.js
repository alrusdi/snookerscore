export const isAdmin = function() {
    const currentUser = Meteor.user();
    if (!currentUser) return false;
    return "emails" in currentUser &&
        currentUser.emails[0].address == "alrusdi@gmail.com"
};
