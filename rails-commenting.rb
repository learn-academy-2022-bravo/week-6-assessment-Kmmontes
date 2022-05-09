# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2) Index is a method and @posts is an instance variable that calls on all defined id BlogPost 
    @posts = BlogPost.all
  end

  # ---3) Show is a method and and it is to find one single piece of data when calling @post. When calling on @posts instance variable you update the params to only look for one particular :id data in the record. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) this is a method called new. When you call on @post a new primary id is created for new data type creation.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) a method called create that is creating a new primary id with data already created in a new post. When calling on @post we are redirecting the path of our post to our appropriate params. If we can not redirect then we need go the new blog post path not called by our instance vairable @post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)def edit method is calling on @posts to find one primary id and displays one id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)method upate takes @posts data and updates it with new data params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)we are deleting, destroying and removing data from our @posts. We are sayign that if our post can not be delted then we must redirect to another path to our @post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) can not be visbile or accesible to others or the user
  private
  def blog_post_params
    # ---10) blog.create are used to create a blog post with the parameters :title and :content
    params.require(:blog_post).permit(:title, :content)
  end
end
