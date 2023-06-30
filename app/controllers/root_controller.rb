class RootController < ApplicationController
  def index
    @projects = Project.all
    @tools = Tool.all

    @latest_post = Post.last
  end
end
