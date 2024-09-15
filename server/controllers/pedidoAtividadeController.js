import ActivityRequest from '../models/pedidos/pedidoAtividades';

// Controller for the tutor to accept or deny activity requests on behalf of the elderly
export const manageActivityRequest = async (req, res) => {
  const { requestId } = req.params;
  const { action } = req.body; // 'accept' or 'deny'

  try {
    // Fetch the activity request
    const activityRequest = await ActivityRequest.findByPk(requestId);

    if (!activityRequest) {
      return res.status(404).json({ message: 'activity request not found' });
    }

    // Handle the accept/deny logic
    if (action === 'accept') {
      activityRequest.status = 'Approved';
    } else if (action === 'deny') {
      activityRequest.status = 'Denied';
    } else {
      return res.status(400).json({ message: 'Invalid action. Must be either "accept" or "deny"' });
    }

    // Save the updated activity request
    await activityRequest.save();

    return res.json({ message: `activity request ${action}ed successfully`, activityRequest });
  } catch (error) {
    return res.status(500).json({ message: 'Error managing activity request', error });
  }
};



