# tandaRedesign
  Test exercise provided by Tanda (Bulk Tagging Tool)

The following application was developed for demonstration purposes only, in a limited time frame.

The website simulates a managers platform in a business, where they can setup their staff so they can be rostered and paid correctly. The setup involves tagging the staff with teams for rostering (i.e Kitchen) and with award tags for payroll i.e. ‘casual’ for casual staff, ‘part time’ for part time staff. Staff can be tagged into multiple teams (i.e. Bistro, Bar) and have multiple tags (i.e. Casual, Level 1).

## Requirements
* List containing users to be tagged
* Complete attributes (not null)
* Unique ID per user (no duplicates)
* Can be linked to database to retrieve more user information

## Development (Using AngularJS)
The employee data was stored in an array, with different attributes (teams, tags, name, last name, id) correspondingly. This data was used to display dinamically within the website. If any of the original data in the array was modified (adding tag or team) the information is updated at the same time in the site (data binding). 

NOTE: It is possible to improve the running times of the algorithms using hash tables or maps, 
however in this case (as we have a small data sample) it runs with no problems.

Further Work:
* It is required to perform tests when tagging the staff members. 
* Parse strings used to display information (user card).
* More "clean" design to be provided (CSS):
** Finish employee profile card
** Change color scheme

