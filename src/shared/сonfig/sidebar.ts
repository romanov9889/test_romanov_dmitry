import boy from '@/shared/assets/icons/boy.svg'
import calendar from '@/shared/assets/icons/calendar.svg'
import home from '@/shared/assets/icons/home.svg'
import teacher from '@/shared/assets/icons/teacher.svg'
import lesson from '@/shared/assets/icons/lesson.svg'


export interface SidebarItem {
  title: string;
  icon: string;
  route: string;
}

export const sidebarItems: SidebarItem[] = [
  { title: 'Главная', icon: home, route: ''},
  { title: 'Расписание', icon: calendar, route: '' },
  { title: 'Ученики', icon: boy, route: '/students' },
  { title: 'Преподаватели', icon: teacher, route: '' },
  { title: 'Занятия', icon: lesson, route: '' }
]
