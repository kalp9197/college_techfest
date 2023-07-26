event_data = {
    'code_wizard':{
        'title':'Code Wizard',
        'description': 'Code Wizard is a coding event that challenges participants to showcase their programming skills. The event is designed for programmers and coders who are passionate about technology and eager to push their limits. Participants will compete against each other in a series of coding challenges that will test their ability to think critically, solve problems, and write clean, efficient code.',
        'date': '1st January 2024',
        'time': '10:00 AM - 4:00 PM',
        'location': 'Event Venue, City',
        'fees': 500,
        'src':'https://cdn.siasat.com/wp-content/uploads/2020/11/CodeWizards.jpg',
        'rules':['No outside food or drinks allowed','No outside food or drinks allowed','No outside food or drinks allowed'],
    },
    'java_coding_contest':{
        'title':'Java Coding Contest',
        'description': 'During the contest, participants will be given a set of programming challenges to solve using Java. They will have to write efficient and error-free code to solve these challenges within the given time frame. The challenges will test the participants understanding of algorithms, data structures, and problem-solving skills.',
        'date': '31st June 2023',
        'time': '11:00 AM - 8:00 PM',
        'location': 'LJ campus, Ahmedabad',
        'fees': '\u{020B9}100',
        'src':'https://thumbs.dreamstime.com/b/java-programming-code-technology-banner-language-software-coding-development-website-design-147329909.jpg',
        'rules':['No outside food or drinks allowed','No outside food or drinks allowed','No outside food or drinks allowed'],
    },
    'web_design_workshop':{
        'title': 'Web Design Workshop',
    'description': 'This event is a workshop designed to teach participants how to design modern websites using HTML, CSS, and JavaScript. The workshop will cover the basics of web design, including layout, typography, color theory, and user experience (UX) design.',
    'date': '15th April 2023',
    'time': '9:00 AM - 12:00 PM',
    'location': 'ABC Conference Center, XYZ City',
    'fees': '\u{020B9}50',
    'src': 'https://media.insider.in/image/upload/c_crop,g_custom/v1595333610/uh397mwtga9zctoqcyzz.jpg',
    'rules': ['Participants must bring their own laptop', 'No outside food or drinks allowed', 'Smoking is strictly prohibited']
    },
    'python_hackathon':{
        'title': 'Python Hackathon',
        'description': 'The Python Hackathon is a 24-hour coding challenge where participants compete to solve problems and build innovative projects using the Python programming language.This event is a great opportunity for Python enthusiasts to showcase their skills, learn from each other, and build something meaningful in a fun and challenging environment.',
        'date': '5th-6th May 2023',
        'time': '12:00 PM - 12:00 PM',
        'location': 'PQR Convention Center, LMN City',
        'fees': '\u{020B9}200',
        'src': 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/001/302/914/datas/original.jpg',
        'rules': ['Participants must bring their own laptop and charger', 'Food and drinks will be provided', 'Teams must have a minimum of 3 members']
    }
}

function set_data(data){
    localStorage.setItem('event',data)
    window.location.href = "event_template.html";
}
function get_data(){
   set_html()
} 
function set_html(){
    event_name =  localStorage.getItem('event')
    document.getElementById('title').innerHTML = event_data[event_name]['title']
    document.getElementById('description').innerHTML = event_data[event_name]['description']
    document.getElementById('date').innerHTML = event_data[event_name]['date']
    document.getElementById('time').innerHTML = event_data[event_name]['time']
    document.getElementById('location').innerHTML = event_data[event_name]['location']
    document.getElementById('fees').innerHTML = event_data[event_name]['fees']
    document.getElementById('event_image').setAttribute("src",event_data[event_name]['src'])
    rules_obj = document.getElementsByClassName('rules')
    for(i=0;i<rules_obj.length;i++)
    {
        rules_obj[i].innerHTML = event_data[event_name]['rules'][i]
    }
}
