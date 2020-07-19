FESTIVUS = [
	{
		year: 2014,
		festivals: [
			{
				date: 'August-September',
				name: 'Vancouver Fringe Festival',
				title: 'Volunteer Usher / Raffle Ticket Seller / Special Events'
			},
			{
				date: 'July',
				name: 'Vancouver Folk Music Festival',
				title: 'Volunteer, Gate Security'				
			},
			{
				date: 'June-July',
				name: 'Vancouver Coastal Jazz Festival',
				title: 'Volunteer, Venue Box Office'
			}
		]
	},
	{
		year: 2013,
		festivals: [
			{
				date: 'September',
				name: 'Vancouver Fringe Festival',
				title: 'Volunteer Ticket Seller / Registration / Office'
			},
			{
				date: 'July',
				name: 'Vancouver Folk Music Festival',
				title: 'Volunteer, Gate Security'				
			},
			{
				date: 'February',
				name: 'New Zealand Fringe Festival 2013, Wellington',
				title: 'Bar Manager, Gryphon Theatre'
			}
		]
	},
	{
		year: 2012,
		festivals: [
			{
				date: 'July-August',
				name: 'New Zealand Film Festival 2011, Wellington',
				title: 'Volunteer Usher, Paramount and Embassy Theatres'
			}
		]
	},
	{
		year: 2011,
		festivals: [
			{
				date: 'July-August',
				name: 'New Zealand Film Festival 2011, Wellington',
				title: 'Volunteer Usher, Paramount and Embassy Theatres'
			},
			{
				date: 'May',
				name: 'New Zealand International Comedy Festival 2011, Wellington',
				title: 'Venue Usher, Garden Club'
			},
			{
				date: 'March',
				name: 'Dunedin Fringe Festival 2011, Dunedin, New Zealand',
				title: 'Volunteer, Promotion'
			},
		]
	}
];

JORBS = [
	{
		company: "University of British Columbia, Faculty of Medicine, Dean’s Office",
		date: "April 2014 – present",
		location: "Vancouver",
		title: "Executive Assistant to the Senior Director of Finance",
		description: "Reporting to the Senior Director of Finance, the Senior Administrative Assistant provides confidential, tactical and executive level administrative support to the Senior Director of Finance, and the portfolio's management team.",
		tasks: [
			"Acting as a primary scheduling resource for the Senior Director by determining/managing schedules and availability; prioritizing/actioning meeting requests, and by making, confirming and ensuring appropriate meeting arrangements and documentation are in order, and required travel arrangements are secured where appropriate.",
			"Providing senior confidential secretarial and administrative support by maintaining multiple confidential soft and hard copy filing systems, and by composing and editing various routine as well as complex and/or sensitive documents and reports as required.",
			"Implementing in-house administration policies and methodologies for the portfolio ensuring they are adopted in compliance with approved UBC policies and procedures, and providing suggestions for workflow process improvements for same.",
			"Working with the Senior Director to carry out strategic project work as and when required.",
			"Researching, planning, implementing and facilitating projects as assigned on an adhoc basis."
		]
	},
	{
		company: "University of British Columbia, Payment and Procurement Services",
		date: "January – March 2014",
		location: "Vancouver",
		title: "Senior Administrative Assistant",
		description: "Reporting to the Director, the Senior Administrative Assistant provides confidential, tactical and executive level administrative support to the PPS Director, Senior HR Coordinator and the portfolio's senior management team.",
		tasks: [
			"Acting as a primary scheduling resource for the Director by determining/managing schedules and availability; prioritizing/actioning meeting requests, and by making, confirming and ensuring appropriate meeting arrangements and documentation are in order, and required travel arrangements are secured where appropriate.",
			"Providing senior confidential secretarial and administrative support to the Director and Senior HR Coordinator by maintaining multiple confidential soft and hard copy filing systems, and by composing and editing various routine as well as complex and/or sensitive documents and reports as required.",
			"Providing stewardship and facilitation of the Director's Office expenses.",
			"Implementing in-house administration policies and methodologies for the PPS portfolio ensuring they are adopted in compliance with approved UBC policies and procedures, and providing suggestions for workflow process improvements for same.",
			"Ensuring confidentiality, processing human resources functions (where appropriate) including the tracking and reporting of staff professional development; maintenance of the portfolio's staff attendance and vacation management systems; and preparation of various attendance related Key Performance Indicator (KPI) statistics.",
			"Working with the Director to carry out strategic project work as and when required.",
			"Supporting maintenance of the portfolio's goods and services supplies inventories (stationary, coffee & water requirements, etc.), ensuring adequate supplies are tracked and maintained at all times.",
			"Researching, planning, implementing and facilitating projects as assigned on an adhoc basis."
		]
	},
	{
		company: "Horticulture New Zealand",
		date: "June 2010 – October 2011",
		location: "Wellington",
		title: "Group Administrator",
		description: "Reporting to the Administration Manager and the Postgraduate Coordinator, the Office Administrator forms part of a team to provide administrative support toward the effective course load management of the Economics and Finance departments of the Commerce and Administration Faculty.",
		tasks: [
			"Providing course administration at the second and third year and postgraduate level, including implementation of university-wide procedures with academics and lecturers in all course documentation and assessments.",
			"Using a large number of university software platforms (including Banner) to communicate with students and academic staff on management of class sizes and accessibility to sign up for course announcements and tutorial sessions.",
			"Entering grades both during and at the end of courses and managed trimester deadlines.",
			"Organizing a number of national and international research workshops throughout the year including booking travel, venue hire, catering, preparing promotional material and collating research papers for delegate packages.",
			"Conducting all administration for a twice-weekly seminar series hosting both national and overseas speakers including booking travel through to hosting on arrival.",
			"Running the school's Reception Desk full-time in conjunction with these duties."
		]
	},
	{
		company: "Animal Health Board",
		date: "February 2008 – June 2010",
		location: "Wellington",
		title: "PA/Group Administrator",
		description: "Reporting to the Technical Manager, the PA/Group Administrator provides an executive level of administrative support.",
		tasks: [
			"Updating and maintaining the Technical Manager’s diary, and assisting with meetings with outside organizations where required.",
			"Updating and collating data in Excel on a monthly basis, undertaking an interrogation of technical data in Excel disease spreadsheets and graphs, and updating PowerPoint presentations.",
			"Managing the input and output of group meetings, including preparation of the agenda, distributing supporting material and preparing minutes.",
			"Drafting responses to emails and correspondence on behalf of the Technical Manager.",
			"Managing team expenses and monthly statements including coding receipts and invoices using P-Card software.",
			"Overviewing the diaries of 3 Technical Managers, notifying them of upcoming events and ensuring that they meet reporting deadlines, as well as other tasks as required for additional managers in the organization."
		]
	}
];

$(function(){
  
  source = $('#jobs').html();
  tmpl = Handlebars.compile(source);
  html = tmpl(JORBS);
  $('.experience').append(html);

  source = $('#festivals').html();
  tmpl = Handlebars.compile(source);
  html = tmpl(FESTIVUS);
  $('.festivals').append(html);

  $('.section:even').addClass('even');
  
  setTimeout(function(){
    if(confirm("Would you like to print?")){
      window.print();
    }
  }, 5000)
  
});


$( document ).ready(function() {
    $(".setsize").each(function() {
        $(this).height($(this).width());
    });
});
$(window).on('resize', function(){
    $(".setsize").each(function() {
        $(this).height($(this).width());
    });
});