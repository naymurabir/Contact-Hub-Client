
const Faq = () => {
    return (
        <div className="pt-16 max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <div className="text-center ">
                <div data-aos="flip-left">
                    <h2 className="text-xl font-bold text-[#CE1446]">Questions</h2>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800" >Frequently Ask Your Questions.</h1>
                </div>
            </div>

            <div className="flex items-center justify-center flex-col lg:flex-row gap-5">

                <div className="lg:w-[40%]">
                    <img src={"https://i.ibb.co/2dN7YSD/FAQ.jpg"} alt="" />
                </div>

                <div className=" lg:w-[60%] bg-[#111D45] rounded-md px-4 py-5 md:px-4 md:py-5 lg:px-5 lg:py-5 text-black mt-10">
                    <div className="collapse collapse-plus mb-3 bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How can I import my contacts into the contact management website?
                        </div>
                        <div className="collapse-content">
                            <p>To import your contacts, log in to your account and navigate to the Import Contacts section. Choose the file format and follow the on-screen instructions to upload your contacts seamlessly.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus mb-3 bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I access my contacts on different devices?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! Our contact management website is cloud-based, allowing you to access your contacts from any device with an internet connection. Simply log in to your account, and your contacts will be synchronized across all your devices, ensuring you have the most up-to-date information wherever you go.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus mb-3 bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Is my contact information secure on your platform?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we prioritize the security of your data. Our contact management website employs state-of-the-art encryption techniques to safeguard your contact information. Additionally, we adhere to strict privacy policies, and your data will never be shared with third parties without your explicit consent.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus mb-3 bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I customize fields and categories for my contacts?
                        </div>
                        <div className="collapse-content">
                            <p>Certainly! Our contact management platform is designed to be flexible. You can easily customize fields and categories to suit your specific needs. Whether you want to add custom fields for birthdays, preferences, or any other details, our user-friendly interface allows you to tailor your contact database to match your requirements.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How does the contact synchronization feature work?
                        </div>
                        <div className="collapse-content">
                            <p>The contact synchronization feature ensures that your contacts stay up-to-date across all connected platforms. When you make changes on one device, the information is automatically updated on all other devices linked to your account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;