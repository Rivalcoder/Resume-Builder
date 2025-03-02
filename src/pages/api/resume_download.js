"use server"
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Only GET requests are allowed' });
    }

    try {

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();

        const htmlContent = `
        <html>
        <head>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
         <body class="bg-gray-100 font-sans">
            <!-- Header Section -->
            <div class="bg-stone-800 text-white h-44 flex items-center justify-end flex-col gap-2 pl-72 relative">
                <div class="absolute left-16 top-8">
                    <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGNkcDkdc_c-uzuHtm-TK-4iDC05NimHBhA&s">
                        <div class="w-full h-full bg-gray-300"></div>
                    </div>
                </div>
                <h1 class="text-3xl font-semibold mb-1">NAVEENA P</h1>
                <h2 class="text-lg mb-6">COMPUTER SCIENCE ENGINEER</h2>
            </div>
        
            <!-- Main Content -->
          
            <div class="w-full  px-4 py-5 flex flex-row gap-8">
                <!-- Left Column -->
                <div class="flex-1">
                    <!-- Contact Info -->
                    <div class="mb-4">
                        <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">CONTACT INFO</h2>
                        <ul class="space-y-1">
                            <li class="flex items-start">
                                <span class="text-teal-600 mr-2">✉</span>
                                <div>
                                    <a href="mailto:bitsathy.ac.in" class="hover:text-teal-600">@bitsathy.ac.in</a><br/>
                                    <a href="mailto:gmail.com" class="hover:text-teal-600">@gmail.com</a>
                                </div>
                            </li>
                            <li class="flex items-center">
                                <span class="text-teal-600 mr-2">📱</span>
                                <span>1234567890</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-teal-600 mr-2">📍</span>
                                <span>Karur-639118</span>
                            </li>
                            <li class="flex items-center text-wrap">
                                <span class="text-teal-600 mr-2">🔗</span>
                                <a href="https://www.linkedin.com/in/naveena-p-01b2b2a2/" class="hover:text-teal-600">https://www.linkedin.com/in/naveena-p-01b2b2a2/</a>
                            </li>
                            <li class="flex items-center">
                                <span class="text-teal-600 mr-2">🐙</span>
                                <a href="https://github.com/navi170802" class="hover:text-teal-600">https://github.com/navi170802</a>
                            </li>
                            <li class="flex items-center">
                                <span class="text-teal-600 mr-2">🗓</span>
                                <span>DOB-17/08/2002</span>
                            </li>
                        </ul>
                    </div>
        
                    <!-- Technical Skills -->
                    <div class="mb-2">
                        <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">TECHNICAL SKILLS</h2>
                        <ul class="list-disc pl-5 ">
                            <li>C</li>
                            <li>C++</li>
                            <li>Netbeans Java</li>
                        </ul>
                    </div>
        
                    <!-- Tools and Technologies -->
                    <div class="mb-4">
                        <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">TOOLS AND TECHNOLOGIES</h2>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Figma</li>
                            <li>MySQL</li>
                            <li>HTML, CSS, Javascript</li>
                            <li>Flutter</li>
                            <li>Canva</li>
                        </ul>
                    </div>
        
                    <!-- Education Background -->
                    <div class="mb-4">
                        <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">EDUCATION BACKGROUND</h2>
                        <ul class="space-y-2">
                            <li>
                                <div class="font-bold">DEGREE- BANNARI AMMAN INSTITUTE OF TECHNOLOGY(2020-2024)</div>
                                <div>B.TECH - COMPUTER SCIENCE AND BUSINESS SYSTEM</div>
                                <div>CGPA: 9.22 (up-to 5th semester)</div>
                            </li>
                            <li>
                                <div class="font-bold">12TH-SRI SANKARA VIDYALAYA (2019-2020)</div>
                                <div>94.8%</div>
                            </li>
                            <li>
                                <div class="font-bold">10TH-SRI SANKARA VIDYALAYA (2017-2018)</div>
                                <div>93.2%</div>
                            </li>
                        </ul>
                    </div>
                </div>
        
                <!-- Right Column -->
                <div class="flex-4">
                    <!-- Career Objective -->
                    <div class="mb-2">
                        <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-2">CAREER OBJECTIVE</h2>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Self-motivated, self-esteemed, highly passionate and hardworking fresher looking for an opportunity to work in a challenging organization to utilize my skills and knowledge to work for the growth of the organization.</li>
                            <li>Currently an undergraduate student who is highly interested in web developing, designing, coding and wish to provide effective solutions to the problem statements.</li>
                        </ul>
                    </div>
        
                    <!-- Projects -->
                    <div>
                        <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">PROJECTS</h2>
                        <ul class="space-y-1">
                            <!-- Project 1 -->
                            <li>
                                <div class="font-bold">• QR VAHAN</div>
                                <div><span class="font-semibold">Duration:</span> (July 2022-Sep 2022)</div>
                                <div><span class="font-semibold">Role Played:</span> Frontend and Backend Developer</div>
                                <div><span class="font-semibold">Tools or techniques used:</span> HTML, Python</div>
                                <div><span class="font-semibold">Team-size:</span> 4</div>
                                <div><span class="font-semibold">Description:</span> A website where drivers can store their documents like license, RC book, insurance, permit in the form of QR code.</div>
                            </li>
        
                            <!-- Project 2 -->
                            <li>
                                <div class="font-bold">• CHAT GPT CRAWLER ENGINE</div>
                                <div><span class="font-semibold">Duration:</span> (December 2022-January 2023)</div>
                                <div><span class="font-semibold">Role Played:</span> Frontend Developer</div>
                                <div><span class="font-semibold">Tools or techniques used:</span> React Js, javascript</div>
                                <div><span class="font-semibold">Team-Size:</span> 4</div>
                                <div><span class="font-semibold">Description:</span> Chatgpt helps users to add a touch of elegance to their writing style and achieve their literary goals. It's all upon a user-friendly and open source optical api key to display the result on user request, and connected server to client side for smooth functioning of the application.</div>
                            </li>
        
                            <!-- Project 3 -->
                            <li>
                                <div class="font-bold">• CHATTING APPLICATION</div>
                                <div><span class="font-semibold">Duration:</span> (May 2022-Jun 2022)</div>
                                <div><span class="font-semibold">Role Played:</span> UI designer</div>
                                <div><span class="font-semibold">Tools or techniques used:</span> Flutter, Android studio, Firebase</div>
                                <div><span class="font-semibold">Team-Size:</span> 5</div>
                                <div><span class="font-semibold">Description:</span> A chatting application where two people can share their thoughts with each other in a confidential manner.</div>
                            </li>
        
                            <!-- Project 4 -->
                            <li>
                                <div class="font-bold">• ATTENDANCE TRACKER</div>
                                <div><span class="font-semibold">Duration:</span> (Mar 2022-May 2022)</div>
                                <div><span class="font-semibold">Tools or techniques used:</span> Python, Machine Learning</div>
                                <div><span class="font-semibold">Description:</span> An Attendance Tracker where it recognises students in a class and mark their attendance and triggers mail to the respective students who lack in attendance.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>  
        </html>
        `;

        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

        await browser.close();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
        res.end(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
}
