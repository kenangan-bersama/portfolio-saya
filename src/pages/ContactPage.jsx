import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        projectType: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, projectType, message } = formData

        // Format pesan untuk WhatsApp
        // %0A adalah kode untuk baris baru (Enter) di URL
        const text = `Halo Mas Sultan, perkenalkan saya *${name}*.\n\nSaya tertarik untuk membuat project: *${projectType}*.\n\nDetail kebutuhan saya:\n${message}\n\nMohon infonya, terima kasih.`

        // Encode message agar aman di URL
        const encodedText = encodeURIComponent(text)

        // Buka WhatsApp
        window.open(`https://wa.me/6281380747386?text=${encodedText}`, '_blank')
    }

    return (
        <div className="min-h-screen relative pt-32 pb-20 px-4 bg-navy-950">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Contact Info */}
                    <div className="text-left space-y-12">
                        <div>
                            <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Hubungi Saya</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Mari Mulai<br />Sesuatu yang Hebat
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Saya siap membantu mewujudkan ide digital Anda.
                                Diskusikan kebutuhan project Anda langsung via WhatsApp untuk respon yang lebih cepat.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Email Item */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-navy-900 rounded-lg border border-navy-800 text-primary-400">
                                    <EnvelopeIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email</h4>
                                    <p className="text-gray-400">sultanhasibuan.work@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone Item */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-navy-900 rounded-lg border border-navy-800 text-emerald-400">
                                    <PhoneIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Telepon / WhatsApp</h4>
                                    <p className="text-gray-400">+62 813 8074 7386</p>
                                </div>
                            </div>

                            {/* Location Item */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-navy-900 rounded-lg border border-navy-800 text-purple-400">
                                    <MapPinIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Lokasi</h4>
                                    <p className="text-gray-400">Jatiwaringin, Pondokgede, Bekasi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Simple Form */}
                    <div className="bg-navy-900 border border-navy-800 p-8 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Nama Lengkap
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-navy-950 border border-navy-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                    placeholder="Nama Anda"
                                    required
                                />
                            </div>

                            {/* REPLACED Email with Project Type */}
                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                                    Jenis Project
                                </label>
                                <input
                                    id="projectType"
                                    type="text"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full bg-navy-950 border border-navy-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                    placeholder="Contoh: Website Toko Online, Aplikasi Absensi"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Detail Kebutuhan
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-navy-950 border border-navy-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                                    placeholder="Ceritakan fitur apa saja yang Anda butuhkan..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors"
                            >
                                <span>Kirim via WhatsApp</span>
                                <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage
