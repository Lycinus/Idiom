json.extract! @user, :id, :username, :email, :fullname, :bookmarks, :likes, :bio
json.numFollowers @user.followers.count
json.followerIds @user.followers.map{|follower| follower.id}
json.numFollowing @user.following.count
json.profPicUrl url_for(@user.profile_image) if @user.profile_image.attached?

json.bookmarks({})
json.bookmarks do
    @user.bookmarks.each do |bookmark|
        json.set! bookmark.id do
            json.extract! bookmark, :user_id, :story_id
        end
    end
end
