class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @post = Post.create!(name: params[:post][:name])

    respond_to do |format|
      format.turbo_stream {
        render turbo_stream: turbo_stream.append("posts", partial: "posts/post", locals: { post: @post })
      }
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    respond_to do |format|
      format.turbo_stream {
        render turbo_stream: turbo_stream.remove("posts-#{params[:id]}")
      }
    end
  end
end
