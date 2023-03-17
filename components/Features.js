import Image from 'next/image';

const FeaturesSection = () => {
    return (
        <section className="sectionSize bg-secondary">
            <div>
                <h2 className="secondaryTitle bg-underline3 bg-100%">Features</h2>
            </div>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2">
                <div className="flex items-start font-montserrat my-6 mr-10">
                    <Image src='/image/logos/Heart.svg' alt='' width={28} height={28} className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Feature #1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                            culpa consequuntur saepe quibusdam labore, est ex ducimus
                            tempore, quos illum officiis, pariatur ea placeat.
                        </p>
                    </div>
                </div>

                <div className="flex items-start font-montserrat my-6 mr-10">
                    <Image src='/image/logos/Heart.svg' alt='' width={28} height={28} className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Feature #2</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                            culpa consequuntur saepe quibusdam labore, est ex ducimus
                            tempore, quos illum officiis, pariatur ea placeat.
                        </p>
                    </div>
                </div>

                <div className="flex items-start font-montserrat my-6 mr-10">
                    <Image src='/image/logos/Heart.svg' alt='' width={28} height={28} className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Feature #3</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                            culpa consequuntur saepe quibusdam labore, est ex ducimus
                            tempore, quos illum officiis, pariatur ea placeat.
                        </p>
                    </div>
                </div>

                <div className="flex items-start font-montserrat my-6 mr-10">
                    <Image src='/image/logos/Heart.svg' alt='' width={28} height={28} className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Feature #4</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                            culpa consequuntur saepe quibusdam labore, est ex ducimus
                            tempore, quos illum officiis, pariatur ea placeat.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;