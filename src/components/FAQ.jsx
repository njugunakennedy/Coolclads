import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition. Items must be unworn, with tags attached, and in the original packaging. Return shipping is free for exchanges, and refunds will be processed within 5-7 business days."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. International shipping may take 7-14 business days depending on the destination. You'll receive tracking information once your order ships."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping rates vary by destination and are calculated at checkout. Please note that customs duties and taxes may apply and are the responsibility of the customer."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive an email with tracking information. You can also track your order by logging into your account and visiting the 'Order History' section. For any tracking issues, please contact our customer support team."
    },
    {
      question: "What sizes do you carry?",
      answer: "We carry sizes XS through XXL for clothing and sizes 6-15 for footwear. Each product page includes detailed size charts to help you find the perfect fit. If you're unsure about sizing, our customer support team is happy to help."
    },
    {
      question: "Do you have a physical store?",
      answer: "Currently, we operate as an online-only retailer. However, we're planning to open flagship stores in major cities soon. Follow our social media channels for updates on store openings and exclusive in-store events."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team through the chat widget on our website, email us at support@coolclads.com, or call us at +1 (555) 123-4567. Our support team is available Monday-Friday, 9 AM - 6 PM EST."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="card">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
              ) : (
                <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
