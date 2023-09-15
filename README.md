
Question-1: Add at least 3 Project features

Answer: 
    1. Credit Limit Tracking: You can take max 20 hr credit.
    2. Selection system: You can not select a course two time.
    3. Course Name: You can see what courses you have selected.
    4. Alert System: If you select above 20 credits or a course twice, you will get a toast alert.



Question-2: Discuss how you managed the state in your assignment project.
    
Answer: 
    I also use 5 useState now I will say you what is the importance for there !
    1. courses (useState([])): 
        * This state variable holds an array of course data retrieved from an external   source (Courses.json).

        ** It is initialized as an empty array and gets updated with course data after a successful API call.
    
    2. creditRemaining (useState(20)):
        * creditRemaining represents the remaining credit hours that a user can select for courses.

        ** It is initialized to 20 credits, indicating that a user starts with 20 available credit hours.
    
    3. creditHour (useState(0)):
        * creditHour keeps track of the total credit hours selected by the user.

        ** It is initialized as 0 and increases as the user adds courses to their cart.

    4. price (useState(0)):
        * price represents the total price of the selected courses in the user's cart.

        ** It is initialized as 0 and updates as the user selects their cart.        
    
    5. markCourses (useState([])):
        * markCourses is an array that stores the courses selected by the user.

        ** Initially, it is an empty array, and courses are added to it as the user selects them.

        *** This array helps prevent the user from selecting the same course multiple times.