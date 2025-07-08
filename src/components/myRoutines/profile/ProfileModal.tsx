import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ProfileForm from './ProfileForm';
import { useProfileStore } from '@/store/profileStore';
import { useState } from 'react';
import type { Profile } from '@/types/Profile';

const ProfileModal = () => {
  const { setProfile } = useProfileStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (profile: Profile) => {
    // ProfileStore 업데이트
    setProfile(profile);

    // 모달 닫기
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 text-white'>
          프로필 설정하기
        </Button>
      </DialogTrigger>
      <DialogContent className='border-choco-200 dark:border-choco-600 dark:bg-choco-800 bg-white sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle className='text-choco-700 dark:text-choco-100'>프로필 생성</DialogTitle>
          <DialogDescription className='text-cool-600 dark:text-cool-200'>
            운동 루틴을 위한 프로필을 만들어주세요.
          </DialogDescription>
        </DialogHeader>

        {/* 프로필 폼 */}
        <ProfileForm onSubmit={handleSubmit} />

        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant='outline'
              className='border-cool-200 text-choco-700 hover:bg-cool-50 dark:border-choco-600 dark:text-choco-100 dark:hover:bg-choco-700'
            >
              취소
            </Button>
          </DialogClose>
          <Button
            type='submit'
            form='profile-form'
            className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 text-white'
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
