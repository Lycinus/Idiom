json.story do
    json.extract! @story, :id, :title, :body, :user_id, :title_preview, :body_preview, :publish_date
    json.imageUrl url_for(@story.image) if @story.image.attached?
    json.authorId @story.user.id
    json.authorName @story.user.fullname
    json.authorImageUrl url_for(@story.user.profile_image)
    json.isFollowed @story.user.followers.include?(current_user)
end


json.comments({})
json.comments do
    @story.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :body, :user_id, :story_id, :updated_at
        end
    end
end

json.bookmarks({})
json.bookmarks do
    @story.bookmarks.each do |bookmark|
        json.set! bookmark.id do
            json.extract! bookmark, :user_id, :story_id
        end
    end
end

json.likes({})
json.likes do
    @story.likes.each do |like|
        json.set! like.id do
            json.extract! like, :user_id, :story_id
        end
    end
end


