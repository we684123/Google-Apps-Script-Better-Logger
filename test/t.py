import logging.handlers
import sys


# logging.critical("critical")
# logging.error('error')
# logging.warning("warning message")
# logging.info("info message")
# logging.debug("debug message")

logger = logging.getLogger(__name__)
handler1 = logging.StreamHandler(sys.stdout)

formatter = logging.Formatter('%(asctime)s - %(levelname)s : %(message)s')
handler1.setFormatter(formatter)

l = 'ERROR'
logger.setLevel(l)
handler1.setLevel(l)

logger.addHandler(handler1)

logger.critical("critical")
logger.error('error')
logger.warning("warning message")
logger.info("info message")
logger.debug("debug message")
