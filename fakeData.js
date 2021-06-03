const fakeData = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert Cecil Martin",
    imageLink:
      "https://books.google.com.bd/books/publisher/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&h=640&stbn=1",

    link: "https://books.google.com.bd/books?id=hjEFCAAAQBAJ&source=gbs_book_other_versions",
    pages: 431,
    description:
      "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship . Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of a software craftsman and make you a better programmer–but only if you work at it. What kind of work will you be doing? You’ll be reading code–lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly, you will be challenged to reassess your professional values and your commitment to your craft. Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code–of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.",
    reviews: [
      {
        name: "brikis98",
        rating: 5,
        review:
          "A good book to read for any coder - perhaps not as thorough as Code Complete but much more effective than Pragmatic Programmer. This book's biggest strength is that it includes tons of code examples ...",
      },
      {
        name: "User review",
        rating: 5,
        review: "Essential book if you were-are-want to be- a programmer.",
      },
    ],
  },

  {
    id: 2,
    title: "The pragmatic programmer",
    author: "Andrew Hunt, David Thomas",
    imageLink:
      "https://books.google.com.bd/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=5&h=640",

    link: "https://www.worldcat.org/title/pragmatic-programmer-from-journeyman-to-master/oclc/1019732973",
    pages: 320,
    description:
      "What others in the trenches say about The Pragmatic Programmer ... & ldquo;The cool thing about this book is that it & rsquo;s great for keeping the programming process fresh. The book helps you to continue to grow and clearly comes from people who have been there. & rdquo; & mdash; Kent Beck, author of Extreme Programming Explained: Embrace Change & ldquo;I found this book to be a great mix of solid advice and wonderful analogies! & rdquo; & mdash; Martin Fowler, author of Refactoring and UML Distilled & ldquo;I would buy a copy, read it twice, then tell all my colleagues to run out and grab a copy.",
    reviews: [
      {
        name: "User review",
        rating: 5,
        review:
          "Essential for the aspiring programmer. Some sections are still an unattainable ideal to me, but they all make sense and I am getting closer to that ideal day by day, inch by inch.",
      },
      {
        name: "User review",
        rating: 5,
        review:
          "So many programming books try and force you into a mold created through years of trial and error centered around a single static part of the industry. In the Pragmatic Programmer, Hunt and Thomas ignore the preconceptions on focus on modular methods of thinking that when followed closely teach not only better programming techniques but better LIVING techniques. And when you live better, you program better. It's that simple. ",
      },
    ],
  },

  {
    id: 3,
    title: "Code Complete",
    author: " Steve McConnell",
    imageLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396837641l/4845.jpg",

    link: "https://www.goodreads.com/book/show/4845.Code_Complete",
    pages: 914,
    description:
      "Widely considered one of the best practical guides to programming, Steve McConnell's original CODE COMPLETE has been helping developers write better software for more than a decade. Now this classic book has been fully updated and revised with leading-edge practices--and hundreds of new code samples--illustrating the art and science of software construction. Capturing the ..",
    reviews: [
      {
        name: "Erika RS",
        rating: 5,
        review:
          "Code Complete is a massive work, so this summary is, necessarily, very high level. It is not a book that one can absorb completely in one reading, but one can absorb its high level themes (summarized nicely in the second to last chapter).",
      },
      {
        name: "Jon Fuller",
        rating: 5,
        review:
          "I came into this with super high expectations. Things I'd heard people say: 'I make everyone on my team read this.' or 'Every developer should start with this book'. So, I thought, 'sweet, a great 'back to basics' book... I can't wait!'. I read through this book with a host of colleagues all with quite different experience levels and in different areas of expertise.",
      },
    ],
  },

  {
    id: 4,
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler, Kent Beck, John Brant, William Opdyke, Don Roberts",
    imageLink:
      "https://books.google.com.bd/books/content?id=HmrDHwgkbPsC&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=HmrDHwgkbPsC&source=gbs_navlinks_s",
    pages: 99998,
    description:
      "As the application of object technology--particularly the Java programming language--has become commonplace, a new problem has emerged to confront the software development community. Significant numbers of poorly designed programs have been created by less-experienced developers, resulting in applications that are inefficient and hard to maintain and extend. Increasingly, software system professionals are discovering just how difficult it is to work with these inherited, 'non-optimal' applications. For several years, expert-level object programmers have employed a growing collection of techniques to improve the structural integrity and performance of such existing",
    reviews: [
      {
        name: "scottjpearson - LibraryThing",
        rating: 5,
        review:
          "I picked up this book at the wrong time. The book was so successful that a second edition is due out on November 30, 2018 (less than two weeks from now). On the other hand, I picked up this book at ...",
      },
      {
        name: "pgSundling - LibraryThing",
        rating: 5,
        review:
          "We're spoiled now that a modern IDE like Eclipse has so many build in refactoring tools, but this was a pivotal book in programming.",
      },
    ],
  },

  {
    id: 5,
    title: "Introduction to Algorithms",
    author:
      "Thomas H.. Cormen, Thomas H Cormen, Charles E Leiserson, Ronald L Rivest, Clifford Stein",
    imageLink:
      "https://books.google.com.bd/books/content?id=NLngYyWFl_YC&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=NLngYyWFl_YC&source=gbs_navlinks_s",
    pages: 1180,
    description:
      "The first edition won the award for Best 1990 Professional and Scholarly Book in Computer Science and Data Processing by the Association of American Publishers.There are books on algorithms that are rigorous but incomplete and others that cover masses of material but lack rigor. Introduction to Algorithms combines rigor and comprehensiveness.The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor.The first edition became the standard reference for professionals and a widely used text in universities worldwide. The second edition features new chapters on the role of algorithms, probabilistic analysis and randomized algorithms, and linear programming, as well as extensive revisions to virtually every section of the book. In a subtle but important change, loop invariants are introduced early and used throughout the text to prove algorithm correctness. Without changing the mathematical and analytic focus, the authors have moved much of the mathematical foundations material from Part I to an appendix and have included additional motivational material at the beginning.",
    reviews: [
      {
        name: "IvanIdris - LibraryThing",
        rating: 5,
        review:
          "This book is like an encyclopedia of algorithms. The algorithms are presented with pseudo code so it doesn’t matter what your favorite programming language is. A very rigorous mathematical approach is used for the analysis of for instance performance",
      },
      {
        name: "User review",
        rating: 5,
        review:
          "It is a fantastic book for those, who want to learn algorithms from scratch. This book consist a good explanation of all data structures which are fundamental and are also very important to understand to get a fruitful idea about algorithms.",
      },
    ],
  },

  {
    id: 6,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma",
    imageLink:
      "https://books.google.com.bd/books/content?id=K4qv1D-LKhoC&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=K4qv1D-LKhoC&source=gbs_navlinks_s",
    pages: 395,
    description:
      "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
    reviews: [
      {
        name: "scottjpearson - LibraryThing",
        rating: 5,
        review:
          "A classic in the field of computer science, this book describes how object-oriented software can be used to develop meaningful (and reusable) classes. It is written by the so-called 'gang of four'",
      },
      {
        name: "James.Igoe - LibraryThing",
        rating: 5,
        review:
          "Depending on on how you think of programming, this book could be incredibly insightful, or horribly abstract and impractical. Since I prefer and tend to think in patterns and abstractions, I found",
      },
    ],
  },

  {
    id: 7,
    title: "The C Programming Language",
    author: " Brian W. Kernighan, Dennis M. Ritchie",
    imageLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391032531l/515601.jpg",

    link: "https://www.goodreads.com/book/show/515601.The_C_Programming_Language",
    pages: 0,
    description:
      "This book is meant to help the reader learn how to program in C. It is the definitive reference guide, now in a second edition. Although the first edition was written in 1978, it continues to be a worldwide best-seller. This second edition brings the classic original up to date to include the ANSI standard.",
    reviews: [
      {
        name: "Danny",
        rating: 5,
        review:
          " This is it. Even after all these years, it's still the go-to resource for learning about C programming. Some call it 'the C bible'.",
      },
    ],
  },

  {
    id: 8,
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    imageLink:
      "https://books.google.com.bd/books/publisher/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=UAYvDwAAQBAJ&source=gbs_navlinks_s",
    pages: 224,
    description:
      "JavaScript is at the heart of almost every modern Web application, whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language that can be used to build full-scale applications. Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs. As you follow along with examples like an artificial life simulation and a version of the classic game Sokoban",
    reviews: [
      {
        name: "francis Agemenyi",
        rating: 5,
        review:
          "The book is very good and can be complex when you get into details. It is one of the best fee books you can download. Practice more and you will get it done.",
      },
      {
        name: "Ubokudom Ubokudom",
        rating: 5,
        review:
          "I have found this book very useful on my Journey to programming. A must read for all programmers. cheers",
      },
    ],
  },

  {
    id: 9,
    title: "Programming Pearls",
    author: "Jon Bentley",
    imageLink:
      "https://books.google.com.bd/books/content?id=vyhrriC6qcEC&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=vyhrriC6qcEC&source=gbs_navlinks_s",
    pages: 256,
    description:
      "The essays in this book present programs that go beyond solid engineering techniques to be creative and clever solutions to computer problems. The programs are fun and teach important programming tecniques and fundamental design principles.",
    reviews: [],
  },

  {
    id: 10,
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    imageLink:
      "https://books.google.com.bd/books/publisher/content?id=iptCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=iptCAwAAQBAJ&source=gbs_navlinks_s",
    pages: 551,
    description:
      "Code: The Hidden Language of Computer Hardware and Software is a book by Charles Petzold that seeks to teach how personal computers work at a hardware and software level.",
    reviews: [
      {
        name: "NITHIN M A",
        rating: 5,
        review:
          "The best book ever about computer science. Well structured and coherent prose that elucidates complex ideas in simple terms for average readers. Truly a great read for innovative minds",
      },
      {
        name: "Missoum Said",
        rating: 5,
        review:
          "incredible how computer works explained in here, the flow from the very first computer that made of wooden to the digital computer we know now, dissected every piece to very smallest possible makes it easy to understand.",
      },
    ],
  },

  {
    id: 11,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma",
    imageLink:
      "https://books.google.com.bd/books/content?id=K4qv1D-LKhoC&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=K4qv1D-LKhoC&source=gbs_navlinks_s",
    pages: 395,
    description:
      "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
    reviews: [
      {
        name: "scottjpearson - LibraryThing",
        rating: 5,
        review:
          "A classic in the field of computer science, this book describes how object-oriented software can be used to develop meaningful (and reusable) classes. It is written by the so-called 'gang of four'",
      },
      {
        name: "User review",
        rating: 5,
        review:
          "Depending on on how you think of programming, this book could be incredibly insightful, or horribly abstract and impractical. Since I prefer and tend to think in patterns and abstractions,",
      },
    ],
  },

  {
    id: 12,
    title:
      "Automate the Boring Stuff with Python, 2nd Edition: Practical Programming for Total Beginners",
    author: "Al Sweigart",
    imageLink:
      "https://books.google.com.bd/books/publisher/content?id=8AcvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&h=640",

    link: "https://books.google.com.bd/books?id=8AcvDwAAQBAJ&source=gbs_navlinks_s",
    pages: 504,
    description:
      "If you’ve ever spent hours renaming files or updating hundreds of spreadsheet cells, you know how tedious tasks like these can be. But what if you could have your computer do them for you? In Automate the Boring Stuff with Python, you’ll learn how to use Python to write programs that do in minutes what would take you hours to do by hand—no prior programming experience required. Once you’ve mastered the basics of programming, you’ll create Python programs that effortlessly perform useful and impressive feats of automation to",
    reviews: [
      {
        name: "evanharmon - LibraryThing",
        rating: 5,
        review:
          "Al Sweigart is a really great writer that takes the time and effort to be really clear and explanatory. There are lots of great ways to apply what you learn in this book to your everyday life which is really crucial to make what you learn stick. You can't go wrong with this book!",
      },
      {
        name: "Ashley Prisacariu",
        rating: 5,
        review:
          "I'm on Chapter 4 of the book, and it's been really helpful so far. I'm new to Python, although I have experience with other languages. Due to that experience, I thought I could jump right into Python with no problem, but the syntax tripped me up almost immediately. This book has clarified everything. Plus, it has questions and projects at the end of each chapter, so it gives you plenty of chances to practice what you've learned.",
      },
    ],
  },
];

export default fakeData;
