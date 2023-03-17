export default function EducationSection(){
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="timeline">
                    {/* School 1 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
                            <p className="text-lg font-medium mb-4">University of XYZ, 2014 - 2018</p>
                        </div>
                    </div>
                    {/* School 2 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="text-xl font-bold mb-2">High School Diploma</h3>
                            <p className="text-lg font-medium mb-4">ABC High School, 2010 - 2013</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

