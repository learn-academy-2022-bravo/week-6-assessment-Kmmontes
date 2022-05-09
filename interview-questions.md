# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: I would begin by definining what a foreign key is which is known a column that connects two data keys in a table of data within a relaitonal database. In other words, a foriegn key acts almost like a holding of data that references a primary key in  the orginal table. I would fix this problem by  simply adding the foreign key by updating the attributes within a column. 

  Researched answer:
I can do what I mentioned previously about adding a new column but I would identify this column by adding and integer to the cohort_id:integer
I can rails db:migrate in rails app cohort.rb
go to has_many students  and then add student model cohoty_id: integer

I can also restart everything and add my foriegn key fromt he start but that would be a waste time. Migrating would be best.


2. Which RESTful routes must always be passed params? Why?

  Your answer:
edit - in order for something to be editing we have to pass it rhough pararms to know exxaclty what is being edited in the [id] we jsut worked on this int he rails-commenting.rb assessment
find - when we find something we are looking at the url attached to the what we are finding that has it own id that need params.
destroy - in order to destory a particular id we need to know what we are destroying with params

  Researched answer:

All three routes listed above need to have params so that we can find the key we are refering to
so that we can perform these tasks. 

Here are three examples of these routes from our assessment to give you a better understadning on  how without params we can perform the data routes: 

def edit
    # ---6)def edit method is calling on @posts to find one primary id and displays one id
    @post = BlogPost.find(params[:id])
  end

def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)we are deleting, destroying and removing data from our @posts. We are sayign that if our post can not be delted then we must redirect to another path to our @post.


Update and create routes also need params.

3. Name three rails generator commands. What is created by each?

  Your answer:

rails db:create - Is when you are creating database in rails you first input this command in the terminal and it creates the database you will work on
rails s - you input rails s in the terminal and  you are running your rails server allowing your capabaility to see your rails app go live  on locahhost3000.
rails db:migrate - it runs the single migrations you have not run yet. It updates the data base.


  Researched answer:

rails db:create - creates the database
rails s - begins the rails server by running the rails app
rails db:migrate - this command updates different versions of your database to accomplish your task at different times. It updates the schema file that holds our created data that we can update, create, or destory data in.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller (create, read, update, delete, index, new) methods perform?

action: "GET"    location: /students          
The name of the controller would that would be called for this route is create. Once you you create a template request and you go to /students you can see what ever content you put in the view/template request.

action: "POST"   location: /students        index method

action: "GET"    location: /students/new     create method of new primary keys
  
action: "GET"    location: /students/2        only show one primary ket of data ex: student id:2

action: "GET"    location: /students/2/edit     edit the student id :2

action: "PATCH"  location: /students/2       modify student id:2 key

action: "DELETE" location: /students/2         remove student id:2 



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


As a developer I can create a rails app
As a developer I can create a database db
As a developer I can create a model called to do list
As a developer I can create a class called TodoList by updating todo_list.rb model 
As a developer I can update the routes.rb in my db
As a developer I can create a controller file to see my changes 
As a developer I can make what I created visble to the user by adding form of my to do list  in the html.erb file
As a developer I can connect the form I added to by item.html.erb file
AS a developer I can show the items in my todo list by updating it on the show.html.erb file
As a developer I can pull up my localhost:3000/todo_lists and see my app todo list form


in between I would run the rails server and to deploy my locahost