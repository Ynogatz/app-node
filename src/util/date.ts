import dayjs from 'dayjs'

export class DateUtils {
	getCurrentDate (): string {
		return dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ss:SSS')
	}
}
