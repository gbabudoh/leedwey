// @ts-ignore
import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY || '');

/**
 * Triggers a Novu notification workflow.
 */
export async function triggerNotification(
  workflowId: string,
  subscriberId: string,
  payload: Record<string, any>
) {
  try {
    const result = await novu.trigger(workflowId, {
      to: {
        subscriberId: subscriberId,
      },
      payload: payload,
    });
    return result.data;
  } catch (error) {
    console.error('Novu Trigger Error:', error);
    throw error;
  }
}

/**
 * Identifies or updates a subscriber in Novu.
 */
export async function identifySubscriber(
  subscriberId: string,
  data: {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
  }
) {
  try {
    await novu.subscribers.identify(subscriberId, data);
  } catch (error) {
    console.error('Novu Identify Error:', error);
  }
}

export default novu;
