---
title: review of twenty twenty-four
link: twenty-twenty-four-wrapped
date created: 2024-12-11
---
## why?
"you're never satisfied with yourself because you keep changing the goalpost"

this is a line that i've heard a lot. but i think i also want to remember and document exactly when, where and how i've changed these goalposts and why.

human memory i've realized, is quite prone to recency bias so this sort of review is my way of trying to overcome that.

thanks to X and google photos for helping me remember where i was, what i was doing and most importantly what i was thinking about which i needed while writing this blog.

> maybe digital footprint isn't a bad thing overall. (/s for luigi)


---

## january

i started my year wrapping up a vacation in bombay.

i had just decided to stop working on nous and wanted to work on something that had more momentum. i think this period was something that influenced my micro-opinion that indie-hacking or even building a startup is really distracting if you seek to solve engineering problems more than the user or business problems.

> i'm glad i was quite regular with documenting the 6 month long period i was working on this lil project. all posts [here](https://sidbin.substack.com/t/nous)

later that month, i reach out to [diwank](https://diwank.name/) a wonderful engineer, researcher and mentor and decided to join [julep](https://julep.ai).

julep was a small team, mostly remote but i believe that it's easier to learn, collaborate and pick people's brain when you're with them in-person.

after a couple of calls, i actually decided to move in with both the founders of julep! fuck it, we ball am i right?

this meant i had to say bye-bye to [Lagrange Point](https://x.com/_lagrangepoint) and the wonderful people there. i had basically built out the latter stages of nous while living and hacking here.

![[Pasted image 20241211230644.png|400]]


thus started my first arc in the year.

---
## february-june

i started learning a lot. there were models to train, datasets to clean, experiments to run, a product to figure out.


![[Pasted image 20241211231116.png]]

![[Pasted image 20241211231515.png|400]]

![[Pasted image 20241211231613.png|400]]

i also ended up closer to my school friends which also made me quite happy!

### here's a speedrun of these months.

i evaluated our internal LLMs and dogfed our own product and helped fix whatever bugs i could.

 i pitched a [research idea](https://julep-ai.github.io/) which went onto [top hackernews](https://news.ycombinator.com/item?id=39852219).

i helped clean datasets and finally found a way to run out of the 40 gigs of memory on my laptop.

built up a really amazing understanding of the engineering that needs to go in behind an "agent".

once, i had to spend an entire day fixing our git history which i messed up while cleaning leaked secrets before our open source launch :P

later that week, were able to open-source and launch julep!
was lucky to be able to be a part of the launch!
![[Pasted image 20241211233753.png|400]]

had my first caffeine-powered all-nighter coding session! i'm an early bird but white monster ftw.

![[Pasted image 20241211234302.png]]

organized my first hackathon with 60+ participating and 45 of them pulling an all-nighter to hack on cool AI stuff built using julep!

![[Pasted image 20241211234438.png|400]]

---

## june-july

### epoch0 and the 5am math habit
it had been 6 months at julep but in all the fun and work, i had noticed my curiosity wander here and there quite a bit. 

it led to a sudden urge to literally lock myself in a room and get a better understanding of math, ml, llms and everything in between.

i decided to take the leap and follow this urge. i wrapped up my work at julep and decided to spend a sizable amount of my day on [mathacademy.com](https://mathacademy.com) as well as learn and work on more things that expand my breadth and depth of knowledge.

i built [epoch0](https://x.com/sidbing/status/1803861695674356045), a discord server for people in a similar position to study math, ml, ai agents together - mostly because i wanted to surround myself with people studying the same things i was. 

it currently has 178 people in it, gpt whisperers, machine learners, ai builders, math nerds; the whole shebang.

![[Pasted image 20240801090658.png|450]]

this is when i started my habit of waking up (or aiming to) at 5am everyday for studying math. yes, there were off-days. yes, sometimes it was 6am or 7am. but amazingly i was able to keep this habit really consistent!


### the move to bangalore 
during starting epoch0 and building a 5am math habit everyday, i decided to move to bangalore. again. but this time, i planned to get my own place.

the timelines were insane.

- flight to bangalore: 17th july
- saying yes to a flat: 20th july
- moving into flat: 25th july
- getting ikea table + chair + assembly: 25th july

i was fully moved into a house of my own in a week.

![[Pasted image 20241212002934.png]]

moving into a place in bangalore is like a 2 week long unpaid internship at the end of which you pay a landlord 1-5 lakh as deposit.

a huuggee shoutout to [lavish](https://x.com/lavishsaluja) for letting my crash at his place while i hunted for a place and [jayesh](https://x.com/wjayesh) for priceless advice of "when you enter the room, you'll know if you wanna move in"


i also gained some thoughts and opinions about moving and living in bangalore over at: [[beginners-guide-blr]].

### start of a research arc?

i ended up getting introduced to [vish](https://vish.systems) who had this crazy idea and motivation to solve for a unique problem of querying terabytes of logs in an observability system.

we spoke about and around this project when [karan](https://x.com/karanganesan) introduced us over a discord call!

i was in, i wanted to work on this.

once i had a table and a chair, i got cracking on some initial experiments for this and i'm so glad i did.

## july-october

i usually don't have instagram but i decided to deactivate X as well. it was time to lock in.

![[Pasted image 20241212015834.png|400]]

### motivatooor!
i also needed started freelancing with [capx ai](https://capx.ai), specifically with another amazing builder, [divya](https://x.com/divyaranjan_) to build out unique telegram agents for them.

> shoutout to tyagi and divya!

i ended up building motivatooor, a telegram bot that manages your to-do lists, texts you to get off your ass and get stuff done based on your priority preference, is now live on telegram!

the unique takeaways here were:
- telegram dx is top-notch
- this leads to the telegram app ecosystem being so far ahead of everyone that you now have mini-apps within telegram?!
- telegram mini-apps and bots can make a looottt of money.
- if everyone i know used telegram, i'd have soo many agents doing stuff for me. but whatsapp is really hostile to developers (but so is my code)

![[Pasted image 20241212010152.png|400]]


![[Pasted image 20241212010108.png]]

### math

math was going amazing! 
i was generally a morning person during this period and had the fastest coverage of my math for the ML course.

![[Pasted image 20241212014745.png]]


### logql-llm
the research project with vish got a lot of clarity after a few weeks of trying stuff out.

we ended up creating the first dataset for natural language to logql queries. i manually handwrote 100 of these rows and then did a simple synthetic expansion.

then we fine-tuned 3 LLMs on this dataset just to see if it makes sense to expand on this and if there are any improvements.

then we rounded up our research into a paper that's under review at [VLDB](https://vldb.org/2025/)!

> i plan to talk more about the paper and our general direction after this soon in another blog post! for now, here's the [arxiv](https://arxiv.org/abs/2412.03612), [huggingface](https://huggingface.co/nl-to-logql) and [github](https://github.com/nl2logql/LogQLLM)

## november-december

i got into turings dream, an ai residency based in bangalore! i explored a lot of random stuff here as well as round up my research with vish.

![[Pasted image 20241212014922.png]]

some cold-emailing led me to contributing to MTEB, the massive text embedding benchmark where i was able to read code of an evaluation and benchmarking project which was quite nice.

i gave my first talk at a conference! i spoke at hasgeeks [rootconf mini](https://hasgeek.com/rootconf/2024/) this year about my research.

however, i got hit with what i can only speculate to be covid which rendered me unable to work for a good 10 days. i was sadly unable to give the talk in person due to this.

![[Copy of _CHA3669.jpg]]


to round up q4, i picked up an amazing project over at [composio](https://composio.dev) to work on which i'm excited to continue on.

the list of ideas and projects i'd wanna try out keeps on increasing but i think i'm coming to terms with the fact that i can't stop treating life as an open-world RPG game where i can just do random stuff.


**towards 2025.**

---
## shoutouts i missed

- ashutosh for willing to hop on a call with me at any time to talk through things.
- adi for giving me a pull-up bar to motivate me to go to the gym. i started shortly after!
- jayesh for willing to come down to give me company at blue tokai whenever i needed a change of scenery to fire up those neurons.
- arnav, the rithwiks and the rest of lagrange point for being an amazingly energetic group of people to be around and learn from.
- blue tokai koramangala for their iced americano.
- monster beverage corporation and zepto for letting me have white monster to fuel my all-nighters.