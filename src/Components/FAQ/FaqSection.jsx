const FeqSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#f3f9fc]">
      <div className="text-center mt-6">
        <h2 className="text-5xl  font-semibold mb-4 font-rancho text-[#374151]">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="font-raleway text-[#1B1A1AB3] text-sm md:text-base lg:text-base">
          As your trusted travel partner, we understand that planning a trip can
          raise many questions. Here are some of the most commonly asked
          questions about our services and how we can assist you. If you do not
          find the answer you are looking for, do not hesitate to reach out to
          us. We are always happy to help!
        </p>
      </div>
      <div className="p-8">
        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium font-rancho">
            WHY SHOULD I BOOK WITH YOU INSTEAD OF AN ONLINE BOOKING SITE, OR
            DIRECT WITH A RESORT?
          </div>
          <div className="collapse-content font-raleway">
            <p>
              With us, you get exceptional personal assistance before, during,
              and after your vacation. Budget is important and we strive to get
              your dream vacation within the budget you have set for it. There s
              no pressure to go above and beyond what you are comfortable with.
              You can not enjoy your vacation when you are stressed out about
              paying for it. We provide honest advice about all resorts and
              destinations to help you choose the perfect resort for you.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium font-rancho">
            WILL I PAY MORE FOR VACATION IF I BOOK THROUGH YOU THAN AN ONLINE
            BOOKING SITE?
          </div>
          <div className="collapse-content font-raleway">
            <p>
              No. We have access to all the same pricing for resorts as the
              online booking sites do and we can price-match online booking
              engine pricing when comparing apples to apples. In many cases, we
              can find discounts and other promotional offerings that are not
              offered to the general public.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium font-rancho">
            WHAT IS TROPICAL TOURS GREATEST STRENGTH?
          </div>
          <div className="collapse-content font-raleway">
            <p>
              The agents in our office work as a team. Each agent has their
              specialty area, ie: Disney, Cruising, All-Inclusive, Destination
              Weddings, Luxury Travel. We work together as a team with the
              client to ensure our customers have the best information and
              resources before, during, and after their vacation. All of the
              agents are familiar with Tropical Tours clients vacation
              ensuring there s always someone available to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeqSection;
