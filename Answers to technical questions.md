##Answers to Technical questions, by Maurice Elliott
    **How long did you spend on the coding test?**
    I honestly spent about 6 hours on it, I was really enjoying getting into the nice to have's like the singleton http client, and getting the dependency injection going alright so I could add it to the unit test.
    I also struggled a little bit, I mainly work on applications that are already up and running, so I haven't had to build many new projects from scratch, it was a good experience though. Epecially getting the decerealisation working, which is something I've not had too much exposure to but it was a satisfying area to work with.
    **What would you add to your solution if you had more time?**
    **If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**
        I initially thought to do the application in node as it would have worked well with the simple "interact with an api and display data", however I did like having C# for the api as it is my preferred language.
        If I had more time to work on this:
            I'd have found a way to get that singletonHttpClient working through dependancy injection, I'm fairly sure there's a way, but I just didn't have the time to get it working.
            I'd have added more unit tests.
            I'd have added a good amount of styling to the front end.
            I'd have implemented a GraphQL api controller to handle GraphQL requests, this is something I've not had the time to do but would have loved to work on an implementation for this piece.
            I'd have seperated the search and the list in the angular app to their own generic components
            I'd have seperated out the call to the api in the angular component to its own service component specifically for Restaurants page
            I'd have remembered to change the out-tsc for the angular output file to somewhere within the root of the app so it was easier to reference.
            I'd have created a one line build script to install and build with angular so that I didn't have to include the node modules. (I was unsure of which ones were required for a first time run so I included all of them)
            I'd have included a build definition/make file for the application
            I'd have seperated the Dto's and Domain objects into seperate csprojects.
            I'd have used Nswag to build a client generator console application to generate clients files.
            I'd have build a basic query handler framework, given a fair amount of time.


    **What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**
        Local functions in C#7:
        This isn't strictly the most useful, but I really enjoy using it, its something used quite frequently in PL/SQL, the transactional query language for Oracle databases, which is the first language I learnt, so when I found an application for it, I used it.
        Here's a few small functions used in a larger email digest method that pulls all changes from within the system and sends a daily digest based on users subscriptions and which objects they are linked to.
        The first method below creates an email, or updates an existing email object with the changes that have happened, if they are subscribed to it, 
        The second function below is just an abstraction of some hard work that needed to be done in the main method, basically just distincting a load of id's of users to make sure only the selected people who had not recieved a digest email in the last 24 hours would recieve one.
                List<DigestEmail> CreateEmailObjects(
                Dictionary<string, List<NotificationUsers>> notificationUsers, 
                List<ChangeCounts> changes, 
                List<DigestEmails> emails
            )
            {
                //lots of linq to mung the 3 lists together, checking email subscribers, and then providing the change counts into email users where they are subscribed, creating new objects or adding to existing.
                return emails;
            }

            List<Guid> GetIdsFromNotificationUserDtos(List<List<NotificationUsers>> dtos)
            {
                //Pulls and Distincts large list of objects
            }
        I've written these from scratch as the actual code is from my current companies codebase and I did not want to include that here.

    **How would you track down a performance issue in production?**
        As long as it had already been confirmed to be a performance issue, and nothing local to the user, specific to the day or the server load, or caused by another error within the application, I'd start start by cloning a fresh copy of live to the dev server so that he data is accurate and fresh, I'd then use then use breakpoints to find where the offending method or api call is.
        I'd then use codeAnalysis in VS to find where the most time is lost, if it was a query in SQL server I'd use prints to output the time in between each call.
        If it was a linq to EF query I'd use a stopwatch to find which call took the longest.
    Have you ever had to do this?**
        I've had to solve performance issues in production quite often, It's something that comes up a lot in the product I currently work on, due to the way it was designed initially. We as a team have been fighting to improve the performance for quite a while but there's just never enough time disgnated to refactoring, which can be very frustrating.
        I've also performed load testing on the application fairly regularly, and quite a while ago now, I managed to shave a 90 second excel generation piece down to 15 seconds, after finding that if you assign the Cell class to memory and don't use it til later, it significantly reduced the performance of the code.
    How would you improve the Just Eat APIs that you just used?
        The amount of data returned in the response could have been modelled and retrieved so nicely with a GraphQL API, you could be requesting just the object and shape you want, letting the server focus on only the data it needs to retrieve.
    Please describe yourself using JSON.
{
  "Name": "Maurice Elliott",
  "EyeColour": "#20c9bb",
  "City": "Bristol",
  "Age": 25,
  "FavouriteLanguageToTalkAboutButNotWrite": "Rust",
  "FavouriteBooks": [ "Harry Potter", "The Stormlight Archives", "The First Law" ],
  "FavouriteNewTechnologyThatsNotGraphQL": "Blockchain",
  "Hobbies": ["Gaming", "Longboarding", "Skating", "Movies"],
  "ComfortableWithLanguages":["C#", "SQL/TSQL/PLSQL", "TypeScript", "JS", "HTML", "CSS", "PowerShell"],
  "DabbledWithLanguages":["Swift","F#", "Python", "Node", "Elm", "C++", "Go", "Rust", "Haskell", "Bash", "Java"],
  "ImmediateFamilyCount": 4,
  "ExtendedFamilyCount": 9223372036854775807, //not really, there's just a lot of them.
  "FavouriteVideoGames": ["Dark Souls 3", "Monster Hunter Franchise", "Diablo 3", "Metal Gear Online"],
  "FavouriteWebsite": "Reddit",
  "CountriesVisitedOrderByDecending": ["Poland", "Thailand", "Italy", "Holland", "Greece", "America", "Italy", "Holland", "Syria", "Etc..."],
  "FavouriteTimeOfYear": "Autumn",
  "ClosingNotes":"I think I've said enough about myself at this point to bore anyone to death, but if you made it this far I'd be delighted if you brought it up in the interview.
  Cheers,
  Maurice."
}