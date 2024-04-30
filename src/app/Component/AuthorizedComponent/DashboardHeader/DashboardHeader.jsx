"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined, QuestionCircleOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons'
import Image from 'next/image';
import { Typography, Input, Button } from 'antd';

const DashboardHeader = () => {
    const [showProfile, setShowProfile] = useState(false);
    const profileRef = useRef(null);
    const router = useRouter();
    const { Title, Paragraph } = Typography;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target) && showProfile) {
                setShowProfile(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, [showProfile])

    return (
        <header className='relative overflow-x-clip bg-white border-b-[1px] border-[#E9E9E9] px-10 py-2 flex items-center justify-between'>
            <div>
                <Title level={2} className='tracking-widest !mb-0 font-sora'>Task Gear</Title>
            </div>

            <div className='flex items-center gap-5'>
                <Input
                    prefix={<SearchOutlined className='text-xl' />}
                    type='search'
                    placeholder="Search"
                    className='border-[1px] border-[#E6E6E6] pr-2 py-2 w-[265px] rounded-xl focus:outline-none'
                />
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-5 '>
                        <Button
                            icon={<QuestionCircleOutlined />}
                            size='large'
                            className='btn bg-[#E6E6E6] p-2 rounded-md'>
                        </Button>
                        <Button
                            icon={<SettingOutlined />}
                            size='large'
                            className='btn bg-[#E6E6E6] p-2 rounded-md'
                        >
                        </Button>
                        <Button
                            icon={<BellOutlined />}
                            size='large'
                            className='btn bg-[#E6E6E6] p-2 rounded-md'
                        >
                        </Button>
                    </div>
                    <button
                        ref={profileRef}
                        onClick={() => setShowProfile(!showProfile)}
                        className='flex items-center gap-2'
                    >
                        <div className='w-12 h-12 rounded-full overflow-hidden'>
                            <Image src="/images/user.jpg" alt="" width={50} height={50} />
                        </div>
                        <div className='text-justify'>
                            <Title level={5} className='!mb-0 font-sora font-semibold text-lg'>Jack Bakley Rion</Title>
                            <Paragraph className='!mb-0 font-sora text-[#6B6B6B] text-sm tracking-widest'>Project Manager</Paragraph>
                        </div>
                    </button>
                </div>
                <div onClick={(e) => e.stopPropagation()} className={`absolute w-[300px] ${showProfile ? 'right-10' : '-right-96'} top-[calc(100%+3px)] flex items-center justify-between bg-white p-3 shadow-[-2px_2px_10px_1px_rgba(0,0,0,0.1)] duration-300`}>
                    <button className='btn font-sora text-sm text-[#6B6B6B] px-5 py-3 border border-[#C4C4C4]'>Profile</button>
                    <button onClick={() => router.push('/')} className='btn font-sora text-sm text-[#6B6B6B] px-5 py-3 border border-[#C4C4C4]'>Logout</button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;