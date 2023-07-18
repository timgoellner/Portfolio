class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])

    posts = Post.all
    @older = posts.where("id < #{@post.id}").last
    @newer = posts.where("id > #{@post.id}").first
  end
end
