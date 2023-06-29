class RootController < ApplicationController
  def index
    @projects = Project.all
    @tools = Tool.all
  end
end
