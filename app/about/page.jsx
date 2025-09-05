"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#fcf6ef] min-h-screen text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 text-center">
        <div className="mb-10">
          <Image
            src="/images/logoBlackNB.png"
            alt="23Studio Logo"
            width={160}
            height={160}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 font-inter">
            23Homestay
          </h1>
          <p className="italic text-yellow-600 text-lg mt-2 font-inter">
            ✦ where rest feels like returning ✦
          </p>
        </div>

        {/* Nội dung chính */}
        <div className="text-left text-gray-700 space-y-5 text-lg leading-relaxed font-lora">
          <p>
            <strong className="text-yellow-700">23Homestay</strong> không phải
            là một cái tên ngẫu nhiên.
          </p>
          <p>
            Đó là dấu mốc – một năm đầy biến động, một cột mốc trưởng thành. Khi
            những đứa trẻ năm ấy chọn ở lại, chọn dựng nên một nơi chốn – để đón
            người lạ, và cũng là nơi mình được hồi phục.
          </p>
          <p>
            Ra đời trong năm 2023, với nhiều điều trùng hợp quanh con số 2 và 3,{" "}
            <strong>23</strong> nhắc chúng tôi rằng:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Có những điều đã từng rất đau, nhưng giờ đủ để sẻ chia.</li>
            <li>Có những mất mát cần được gọi tên, để rồi buông nhẹ.</li>
            <li>Và có những kết thúc, hóa ra chỉ là khởi đầu mới.</li>
          </ul>
          <p>
            23Homestay không chỉ là nơi để ở. Nó là một khoảng lặng vừa đủ giữa
            thành phố – để bạn chậm lại, để cảm xúc được nghỉ một chút.
          </p>
          <p>
            Chúng tôi tin rằng, những gì thật sự chạm đến con người… thường đến
            từ những điều rất đơn giản.
          </p>
          <p>Một nơi dễ tìm.</p>
          <p>Một trải nghiệm dễ chịu.</p>
          <p>Một cảm giác đủ gần gũi để bạn không cần cố gắng.</p>
          <p className="font-semibold italic text-right text-yellow-700">
            Love, 23Homestay
          </p>
        </div>
      </div>
    </section>
  );
}
